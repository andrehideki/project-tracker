import { Comment } from "../comment";
import { ActionSection, Comments, ComunicationSection } from "./styles";

export function Project() {
  return (
    <div>
      <header>
        <h1>Meu Projeto</h1>
        <small>Ultima atualização: 01/01/2021</small>
      </header>
      <main>
        <ActionSection>
          <div>
            <label>Branch</label>
            <select>
              <option>master</option>
              <option>h2</option>
            </select>
          </div>
          <button>Gerar versão</button>
        </ActionSection>
        <ComunicationSection>
          <header>
            <button>Novo comentario</button>
          </header>
          <Comments>
            <Comment user="andre.hideki" comment="Projeto iniciado" />
            <Comment user="socmar.lome" comment="Fazer ...." />
          </Comments>
        </ComunicationSection>
      </main>
    </div>
  )
}