import React from "react";

 const Assignment=(props)=> {

  //  console.log(props.match.params.id)
  
  return (
    <section id='testimonials' className='testimonials section-bg'>
      <div className='container'>
        <div
          className='testimonials-slider swiper-container'
          data-aos='fade-up'
          data-aos-delay='100'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <div className='testimonial-wrap'>
                <div className='testimonial-item'>
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <p>
                    <i className='bx bxs-quote-alt-left quote-icon-left'></i>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                    <i className='bx bxs-quote-alt-right quote-icon-right'></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Assignment