export function Project() {
  return (
    <div>
      <header>
        <h1>Nome</h1>
      </header>
      <main>
        <section>
          <div>
            <label>Branch</label>
            <select>
              <option>master</option>
              <option>h2</option>
            </select>
          </div>
          <button>Gerar versão</button>
        </section>
      </main>
    </div>
  )
}