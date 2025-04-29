import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import BlogPost from './components/BlogPost'

function App() {

  const blogPosts = [
    {
      date: "11/11/20",
      title: "On the Street in Brooklyn",
      image: "./assets/blog-image-1.jpg",
      content: "Cray ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat laborum et, harum commodi cum ex nisi, magni ipsum totam pariatur non voluptas fuga saepe doloremque, natus enim alias. Eum."
    },
    {
      date: "11/12/20",
      title: "Vintage in Vogue",
      image: "./assets/blog-image-2.jpg",
      content: "Selfies sunt dolor sit amet consectetur adipisicing elit. Culpa fugiat laborum et, harum commodi cum ex nisi, magni ipsum totam pariatur non voluptas fuga saepe doloremque, natus enim alias. Eum."
    }
  ]

  return (
    <div>
      <Header/>
      <Navbar/>
      {blogPosts.map(blogPost => <BlogPost
        date = {blogPost.date}
        title = {blogPost.title}
        image = {blogPost.image}
        content = {blogPost.content}
      />)}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat laborum et, harum commodi cum ex nisi, magni ipsum totam pariatur non voluptas fuga saepe doloremque, natus enim alias. Eum.
    </div>
  )
}

export default App
