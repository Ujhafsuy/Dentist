import Dente from "./images/dente.jpg"
import Doctor from "./images/doctor.jpg"
import "./styles/style.css"

function App() {
  return (
    <div className="App">
      <div id="container">
        <header className="initial">

          <img src="" alt="logo" />
        </header>
        <main className="main">
          <section className="onest">

            <div className="imgbox">
              <img src={Doctor} alt="image" className="doctor1" />
            </div>
            <h1 className="titulo">Faça já sua consulta</h1>

            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia nesciunt odio cum autem pariatur dicta ut esse possimus, similique non, in optio a odit repellat sint neque suscipit ipsum quo officiis iusto saepe illo. Porro aut qui, natus neque doloremque adipisci, error consectetur nesciunt nam, quaerat veniam numquam totam vero cumque voluptas. Eligendi odio consequatur quibusdam ab aut ipsum!</p>
            <div className="bottom"></div>
          </section>
          <section className="onest">
            <h1 className="titulo">Implantes</h1>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda fugit reiciendis accusamus! Vero unde quas reprehenderit minima at, eligendi, a aliquid beatae sequi iure cupiditate itaque consectetur eum est ut porro exercitationem dolor doloribus. Repudiandae ipsam ea aperiam reiciendis at, hic tempora veritatis possimus, omnis eum explicabo optio, distinctio nulla?.</p>
          </section>
          <section className="options">

          </section>

        </main>
      </div>
    </div>
  );
}

export default App;
