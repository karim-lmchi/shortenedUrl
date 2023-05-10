import { useContext } from 'react';
import { Context } from '../../page';
import {
  HomepageWrapper,
  Header,
  SeparateBloc,
  BodyWrapper,
  BodyContent,
  Title,
  ActionWrapper,
  StyledInput,
  StyledButton,
  ResponseWrapper,
  ResponseText,
  Link
} from './home.styles';

export const Home = () => {
  const context = useContext(Context);

  const generateRandomShortenedUrl = () => {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
  
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    context.setShortenedUrl(result);
  }

  const formatUrl = (url: string) => {
    if(!url.startsWith('http')) {
      return `https://${url}`;
    }
    return url;
  }

  const checkUrl = () => {
    const regexHttp = /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/gm;
    const regexWww = /^www\.[^\s\/$.?#].[^\s]*$/gm;
    const isRegexHttp = (context.inputValue).match(regexHttp) !== null;
    const isRegexWww = (context.inputValue).match(regexWww) !== null;

    if(isRegexHttp || isRegexWww) {
      generateRandomShortenedUrl();
      context.setSuccess(true);
    } else {
      context.setSuccess(false);
    }

    fetch(formatUrl(context.inputValue))
    .then(response => {
        console.log(response);
      if (response.status === 200) {
        console.log("l'url existe");
      } else {
        console.log(context.inputValue)
        console.log(response)
      }
    })
    .catch(error => {
      console.log(error);
    });

    context.setDiplayResponse(true);
  };

  return (
    <HomepageWrapper>
    <Header />
    <BodyWrapper>
    <BodyContent>
    <Title>URRL</Title>
    <ActionWrapper>
    <StyledInput
      type='text'
      value={context.inputValue}
      onChange={e => context.setInputValue(e.target.value)}
    />
    <StyledButton
      onClick={checkUrl}>
        Raccourcir
    </StyledButton>
    </ActionWrapper>
      <SeparateBloc />
      {context.displayResponse && (
        <ResponseWrapper success={context.isSuccess}>
          <ResponseText success={context.isSuccess}>
            {
              context.isSuccess
                ? <span>Voici le lien raccourci : <Link href={formatUrl(context.inputValue)} target="_blank">{window.location.href}{context.shortenedUrl}</Link></span>
                : "L'url saisie est invalide"
              } 
            </ResponseText>
          </ResponseWrapper>
        )}
    </BodyContent>
    </BodyWrapper>
  </HomepageWrapper>
  );
};
