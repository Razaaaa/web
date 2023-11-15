import React from 'react'
import './Blog.css'


const Blog = () => {
  return (
  <div className="blog-page">
    <main className="container">
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 fst-italic">How much sleep do you actualy need?</h1>
          <p className="lead my-3">Just how many hours of sleep are enough for you? The answer varies and it might be better to track sleep quality than focus on the number of hours you log each night.</p>
          <p className="lead mb-0"><a href="https://www.health.harvard.edu/blog/how-much-sleep-do-you-actually-need-202310302986" class="text-white fw-bold">Continue reading...</a></p>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">Health</strong>
              <h3 className="mb-0">Kidneys, eyes, ears, and more: Why do we have a spare?</h3>
              <div className="mb-1 text-muted">October 23, 23</div>
              <p className="card-text mb-auto">The human body has excess capacity — that is, our organs have more reserve than most of us will ever need. Why are we built with this natural redundancy? And which body parts can safely fail or be removed without impairing health?</p>
              <a href="https://www.health.harvard.edu/blog/kidneys-eyes-ears-and-more-why-do-we-have-a-spare-202310202984" className="stretched-link">Continue reading</a>
            </div>
         
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">Health</strong>
              <h3 className="mb-0">Which skin creams are most effective for eczema?</h3>
              <div className="mb-1 text-muted">October 12, 23</div>
              <p className="mb-auto">A common form of eczema called atopic dermatitis. There are a number of prescription creams available to ease this chronic skin condition, but some are more effective than others, and a recent study compared them.</p>
              <a href="https://www.health.harvard.edu/blog/which-skin-creams-are-most-effective-for-eczema-202310122981" className="stretched-link">Continue reading</a>
            </div>
            <div className="col-auto d-none d-lg-block"></div>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default Blog