import React from 'react'
import Footer from './HomePageComponents/Footer'
import NavBar from './HomePageComponents/NavBar'
import BlogHeading from './Headings/BlogHeading'
import './BlogPage.css'
export default function BlogPage() {
  return (
    <div>
      <NavBar/>
      
      <div className="BlogPageContent"><div className="BlogPage">
      <div className="heading"><BlogHeading/></div>
      <section id="blog">
  <div className="blog-box">
    <div className="blog-image">
      <img src="https://cdn0.weddingwire.in/article/2018/original/1280/jpg/98102-graceful-mehndi-design-for-full-hands.jpeg" alt="Blog"/>
    </div>
    <div className="blog-details">
      <h4>Indian Mehndi Design</h4>
      <p>Indian mehndi designs can be worn not only during bridal ceremonies but it also complements a salwar kameez or a lehenga.

This mehndi design consists of paisleys and meshwork. Along with that it also consists of floral patterns.</p>
      <a href="https://en.wikipedia.org/wiki/Mehndi">Continue reading</a>
    </div>
   
  </div>
  <div className="blog-box">
    <div className="blog-image">
      <img src="https://media.weddingz.in/images/8fbd5d83047c9a8615745ea941be1c87/Henna-mehndi-designs.jpg" alt="Blog"/>
    </div>
    <div className="blog-details">
      <h4>Henna Mehndi</h4>
      <p>The mehndi mixture is made from a ground paste or powder from the leaves of the henna plant. While henna can refer to the plant itself, mehndi almost always refers to the finished product of henna used for the art</p>
      <a href="https://en.wikipedia.org/wiki/Mehndi">Continue reading</a>
    </div>
   
  </div>
  <div className="blog-box">
    <div className="blog-image">
      <img src="https://i.pinimg.com/originals/6c/94/ac/6c94ac6e1086d922d0bbd876cede8cc6.jpg" alt="Blog"/>
    </div>
    <div className="blog-details">
      <h4>Bridal Mehndi Design</h4>
      <p> Bridal mehndi is a must during Indian weddings. It is a huge part of the ceremony and it is enjoyed by everyone present.Bridal mehndi is a must during Indian weddings. It is a huge part of the ceremony and it is enjoyed by everyone present.</p>
      <a href="https://en.wikipedia.org/wiki/Mehndi">Continue reading</a>
    </div>
    
  </div>
  <div className="blog-box">
    <div className="blog-image">
      <img src="https://stylesatlife.com/wp-content/uploads/2017/04/Arabic-Western-Mehndi.jpg.webp" alt="Blog"/>
    </div>
    <div className="blog-details">
      <h4>Western Style Mehndi Design</h4>
      <p>Applying mehndi is a tradition and related to the culture of some people. However, people in the west have also started taking a liking for it.

This resulted in a western-style mehndi design. It mostly consists of geometric shapes, patterns, contemporary mehndi designs and more.</p>
      <a href="https://en.wikipedia.org/wiki/Mehndi">Continue reading</a>
    </div>
  
  </div>
  <div className="blog-box">
    <div className="blog-image">
      <img src="https://shaadiwish.com/blog/wp-content/uploads/2020/07/henna-design-ideas.jpg" alt="Blog"/>
    </div>
    <div className="blog-details">
      <h4>Arabic Mehndi Design
      </h4>
      <p>This pattern is drawn on the palm . Generally it starts from one corner of the wrist and ends at finger tip on the opposite corner. Vine, lace, flowers are the main elements of this pattern</p>
      <a href="https://en.wikipedia.org/wiki/Mehndi">Continue reading</a>
    </div>
   
  </div>
</section></div></div>
      <Footer/>
    </div>
  )
}
