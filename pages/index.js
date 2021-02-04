import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/Widget/widget";
import QuizBackground from "../src/components/QuizBackground/quizBackground";
import Footer from "../src/components/Footer/footer";
import GitHubCorner from "../src/components/GitHubCorner/gitHubCorner";

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10px;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>Teste do Alura Quiz</h1>
            </Widget.Header>
            <Widget.Content>
              <p> Isso aqui eh um teste</p>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Teste do Alura Quiz</h1>

              <p> Isso aqui eh um teste</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/phbritoo" /> 
    </QuizBackground>
  );
}
