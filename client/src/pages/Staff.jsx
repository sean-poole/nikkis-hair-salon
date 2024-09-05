

export default function Staff() {
  return (
    <div className="main--container">
      <div className="container right--container staff--container">
        <div className="staff--title text-end">
          <h4><b>NIKKI</b></h4>
          <h5 className="fs-6"><i>FOUNDER & MASTER STYLIST</i></h5>
        </div>
        <div className="staff--info">
          <p className="pe-4">Originally from New York, Nikki has planted her roots in Los Angeles since graduating from the illustrious Empire Beauty School and moving here in 2009. After working with celebrities in Hollywood in the film post-production industry for a decade, Nikki has turned her attention to her lifelong dream of opening her own beauty salon. She has instilled her learnings and mastery of each hairstyling technique into her salon where she can work intimately with clients and develop long-lasting relationships. An educator at heart, Nikki is able to help guests find what compliments their own individual style and teaches them techniques to recreate their look at home.</p>
          <img 
            className="stylist--img" 
            src="images/team/nikki.jpg" 
            alt="Nikki" 
          />
        </div>
      </div>
      <div className="container left--container staff--container">
        <div className="staff--title text-start">
          <h4><b>MICHELLE</b></h4>
          <h5 className="fs-6"><i>HEAD STYLIST</i></h5>
        </div>
        <div className="staff--info">
          <img 
            className="stylist--img" 
            src="images/team/michelle.jpg" 
            alt="Michelle" 
          />
          <p className="ps-4">Southern California native, Michelle, found her passion for hairdressing early in life and was driven to learn more about the art form as she grew older. By age 20, she began training at the Toni & Guy Hairdressing Academy in Santa Monica where she received her cosmetology license. After graduating, she continued to expand on her technical skills by enrolling in advanced classes at the Aveda Institute in Los Angeles specializing in cutting and styling. She enjoys working with all hair types, but her expertise is layered, bob and textured haircuts. Michelle loves connecting and problem solving for her guests while creating haircuts that show off their best features and natural texture.</p>
        </div>
      </div>
      <div className="container right--container staff--container">
        <div className="staff--title text-end">
          <h4><b>DEVIN</b></h4>
          <h5 className="fs-6"><i>HEAD COLORIST</i></h5>
        </div>
        <div className="staff--info">
          <p className="pe-4">Mixing the perfect shades is Devin&#39;s specialty. He attended Arrojo Cosmetology school and became certified in color. He credits his time in New York as being the perfect combination for fashion and beauty to express his creativity through hair color. From virgin hair to major color correction, he will have any head shining bright. Devin is meticulous when it comes to his color transformations, as his training is based on executing it correctly while maintaining the health and integrity of the hair.</p>
          <img 
            className="stylist--img" 
            src="/images/team/devin.jpg" 
            alt="Devin" 
          />
        </div>

      </div>
      <div className="container left--container staff--container">
        <div className="staff--title">
          <h4><b>DENISE</b></h4>
          <h5 className="fs-6"><i>STYLIST</i></h5>
        </div>
        <div className="staff--info">
          <img 
            className="stylist--img" 
            src="/images/team/denise.jpg" 
            alt="Denise" 
          />
          <p className="ps-4">Apprenticed in New York, Denise has a mindful eye on current trends, classic style, and the newest techniques so that customers always leave looking their best. Her ability to pinpoint what her clients desire along with her sharp attention to detail ensure that each guest is presented with a myriad of creative options and maximum potential for their hair. Driven by inspiration she finds in not only in art, nature and fashion, but her guests themselves, Denise is a true visionary and never complacent in her evolutionary development of fresh, new looks.</p>
        </div>
      </div>
    </div>
  );
}
