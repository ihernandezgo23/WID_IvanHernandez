import { Header } from "./Components/Header"
import { MainArticle } from "./Components/MainArticle"
import { NewContainer } from "./Components/NewContainer"
import { ArticlesContainer } from "./Components/ArticlesContainer"

export function App() {
  return (
    <main className="px-4 pt-6 pb-3 font-Inter lg:px-40 lg:pt-20" >
      <Header/>
      <div className="md:flex md:gap-8 md:mb-10">
        <MainArticle />
        <NewContainer />
      </div>
      <ArticlesContainer />
    </main>
  )
}

export default App;