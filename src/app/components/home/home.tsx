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

export const Home: React.FC = () => {
  const context = useContext(Context);

  const generateRandomShortenedUrl = () => {
    const characters: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result: string = '';
  
    for (let i = 0; i < 6; i++) {
      const randomIndex: number = Math.floor(Math.random() * characters.length);
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
      context.setUrlRedirection(context.inputValue);
      context.setSuccess(true);
    } else {
      context.setSuccess(false);
    }

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
              type='button'
              onClick={checkUrl}>
                Raccourcir
            </StyledButton>
          </ActionWrapper>
          <SeparateBloc />
          {context.displayResponse && (
            <ResponseWrapper success={context.isSuccess ? context.isSuccess : undefined}>
              <ResponseText success={context.isSuccess ? context.isSuccess : undefined}>
                {
                  context.isSuccess
                    ? <span>Voici le lien raccourci : <Link href={formatUrl(context.urlRedirection)} target="_blank">{window.location.href}{context.shortenedUrl}</Link></span>
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
