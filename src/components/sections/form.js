import React, { useCallback, useState }  from "react"
import { Container } from "../global"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReCAPTCHA from "react-google-recaptcha"
import styled from "styled-components"
import axios from "axios";
import FormImage from "../../images/svg/form.svg"

let recaptchaInstance;

const MyForm = () => {

  const [disableSubmit,setDisableSubmit] = useState(true);

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
      recaptchaInstance.reset();
      setDisableSubmit(true)
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/e92cda47-d128-4f1c-b7f0-a69e09fadd73",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Täname registreerimast!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

    return (
      <FormWrapper>
        <Container>
          <Flex>
            <FormBox>
              <div className="col-md-10 mt-5">
                <form onSubmit={handleOnSubmit}>
                  <div className="form-group">
                    <label for="InputName">Nimi</label>
                    <input type="text" name="Nimi" className="form-control" id="InputName" placeholder="Sisesta nimi" required="required"/>
                  </div>
                  <div className="form-group">
                      <label for="InputEmail" required="required">Email</label>
                      <input type="email" name="Email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Sisesta email" required="required"/>
                  </div> 
                  <div className="form-group">
                    <ReCAPTCHA 
                      ref={e => recaptchaInstance = e}
                      name="Recaptcha"
                      sitekey="6Lda10UaAAAAAO6CbkZsichV5pPiDwxjDY58ZHE7" 
                      onChange={useCallback(() => setDisableSubmit(false))}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-lg btn-primary"  disabled={disableSubmit}>
                      Salvesta
                  </button >
                  {serverState.status && (
                    <Success className={!serverState.status.ok ? "errorMsg" : ""}>
                    {serverState.status.msg}
                    </Success>
                  )}
                </form>
              </div>
            </FormBox>
            <ImageWrapper>
              <StyledImage src={FormImage}/>
            </ImageWrapper>
          </Flex>
          
            
        </Container>

      </FormWrapper>
     
    );
  };
  
  export default MyForm;


const FormBox = styled.div`
  @media (min-width: ${props => props.theme.screen.md}) {
    justify-self: end;
  }
  

`

const StyledImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  }
`

  const FormWrapper = styled.section`
  padding: 160px 0 80px 0;
  position: relative;
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`

  const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
  }
`

  const Success = styled.div`
  font-weight: bold;
  color: #488f5b;
  background: #E1F8ED;
  padding: 20px;
  margin-top: 16px;
  margin-bottom: 16px;
  `
  const ImageWrapper = styled.div`
  justify-self: center;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
    display: none;
  }
`
