import ContentSection from '../components/ContentSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import PageQuote from '../components/PageQuote'

type Props = {}

const Technology = (props: Props) => {
  return (
    <>
        <HeroSection imgurl='images/tech__banner.png'>
            <h1 className=" text-4xl md:text-5xl text-white">nordic <br /> <span className="text-nsgreen">high-end</span> <br /> cleantech</h1>
        </HeroSection>
        <PageQuote>
            <span>Nordiska Solutions is committed to provide primarily “Nordic” high-end cleantech products and solutions for both municipal and industrial applications. We offer customised solutions in water treatment, wastewater treatment and sloid / hazardous waste management to our regional and global customers. &nbsp;</span>
        </PageQuote>

        <ContentSection sectionTitle='technology' buttonTitle='Inquire' bgImageCSS='linear-gradient(45deg, #073E4A 10%, #073E4A 90%)' sectionImageURL='images/tech__main__icon.png'>
            <>
              <p>We constantly work together with our customers and technology providers in order to guarantee the very highest level of customer satisfaction and sustainability. The success of our clients depends on the skills and commitment of our people and we constantly pursue the innovative technology and cost-effective solutions for our clients, as we are driven to find answers where others fail.</p>

              <p className="mt-10 hidden">We are committed to providing optimal Nordic cleantech solutions to today’s challenges across the nation and around the world and to preparing for tomorrow’s environmental trends.</p>
        <p className="mt-10 hidden">Our superior network, as referred in all our services, is the basis of success in building prospective partnerships. The wide range of connections enables us to offer diverse selections from each sector and business size.</p>
        <p className="mt-10 hidden">
          Whether you are seeking to find partners individually or on a corporate basis, we will provide you the perfect match according to your requirements.
        </p>
      
            </>
        </ContentSection>
        
        <Footer />
    </>
  )
}

export default Technology