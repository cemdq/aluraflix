import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import FormCategoria from "./componentes/Formulario/categoria";
import Categoria from "./componentes/Categoria";
import NavBar from "./componentes/NavBar";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [categorias, setCategorias] = useState([
    {
      id: uuidv4(),
      nome: 'Memes do JavaScript',
      cor: '#8899A3'
    },
    {
      id: uuidv4(),
      nome: 'Desmistificando o Mobile',
      cor: '#E2AF04'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      imagem: 'VHxoyduIt18',
      categoria: categorias[0].nome
    }, {
      id: uuidv4(),
      favorito: false,
      imagem: 'HBVCsBtsmzA',
      categoria: categorias[0].nome
    }, {
      id: uuidv4(),
      favorito: false,
      imagem: 't5A2jJaMjVs',
      categoria: categorias[0].nome
    }, {
      id: uuidv4(),
      favorito: false,
      imagem: '0zArD_Ih3NQ',
      categoria: categorias[0].nome
    }, {
      id: uuidv4(),
      favorito: false,
      imagem: 'r_v5PBV8ltE',
      categoria: categorias[0].nome
    },{
      id: uuidv4(),
      favorito: false,
      imagem: 'Ta3_41dPvhI',
      categoria: categorias[0].nome
    }, {
      id: uuidv4(),
      favorito: false,
      imagem: '2z6f8VN_Pro',
      categoria: categorias[1].nome
    }, {
      id: uuidv4(),
      favorito: false,
      imagem: 'fmu1LQvZhms',
      categoria: categorias[1].nome
    }, {
      id: uuidv4(),
      favorito: false,
      imagem: '9V48oXZdXgQ',
      categoria: categorias[1].nome
    }, {
      id: uuidv4(),
      favorito: false,
      imagem: 'vf9P_PycgRw',
      categoria: categorias[1].nome
    }, {
      id: uuidv4(),
      favorito: false,
      imagem: 'YhnNOTde2I0',
      categoria: categorias[1].nome
    },
  ]

  const [videos, setVideos] = useState(inicial)

  function deletarVideo(id) {
    setVideos(videos.filter(video => video.id !== id));
  }

  function mudarCor(cor, id) {
    setCategorias(categorias.map(categoria => {
      if (categoria.id === id) {
        categoria.cor = cor;
      }
      return categoria;
    }));
  }

  function cadastrarCategoria({ nome, cor }) {
    setCategorias([...categorias, { nome, cor, id: uuidv4() }])
  }

  return (
    <div>
      <NavBar />
      <Banner />
      <section>
        {
          categorias.map((categoria, indice) => 
          <Categoria
            mudarCor={mudarCor}
            key={indice}
            categoria={categoria}
            videos={videos.filter(video => video.categoria === categoria.nome)}
            aoDeletar={deletarVideo} />)
        }
      </section>
      <Formulario 
        categorias={categorias.map(categoria => categoria.nome)} 
          aoCadastrar={video => setVideos([...videos, video])} />
      <FormCategoria aoCriarCategoria={cadastrarCategoria} />
    </div>
  );
}

export default App;
