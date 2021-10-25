import { ActionSection, ComunicationSection } from "./styles";

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
          
        </ComunicationSection>
      </main>
    </div>
  )
}