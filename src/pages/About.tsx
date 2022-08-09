import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import PageQuote from '../components/PageQuote'

type Props = {}

const About = (props: Props) => {
  return (
    <>
        <HeroSection imgurl='images/about__banner.png'>
          <h1 className=" text-4xl md:text-5xl text-white">the <br /> <span className="text-nsgreen">nordiska</span> <br /> story</h1>
        </HeroSection>
        <PageQuote>
          <span>We strive to implement long term relationships with our clients, based on extensive industry knowhow, quality services, reliable technologies and thorough understanding of all parties involved in the business &nbsp;</span>
        </PageQuote>

        <div className="content-wrapper" style={{backgroundImage: 'linear-gradient(45deg, #001140 30%, #010d31 70%)'}}>
        <div className="container flex flex-col gap-20 md:flex-row">
          <div className="text-white md:basis-1/2 font-zenMaru text-2xl">
            <h3 className="font-zen text-nsgreen text-4xl">history</h3>
            <p className="my-10">Nordiska Solutions is Finnish-Malaysian joint company which has developed a cluster business concept with some leading environmental companies in Europe and Japan who are active in water, wastewater and solids waste management technologies and solutions. </p>
            <p>This cluster business platform provides sophisticate and cost-effective solutions that are in the best interest of our clients, their customers and the environment. The founder of the company has over 22 years experiences in cleantech field and vast knowledge in international business.</p>
          </div>
          <div className="text-white md:basis-1/2 font-zenMaru text-2xl">
            <h3 className="font-zen text-nsgreen text-4xl">expertise</h3>
            <p className="my-10">The domain expertise &amp; experience gathered over past two decades gives us edge over competition so as to provide high-end technologies and solutions to various domestic and industrial applications.</p>
            <p className="my-10">We constantly continue developing our technology together with our customers and partners in order to guarantee the very highest level of customer satisfaction and sustainability.</p>
            <p className="my-10">We passionately believe that people and teams build projects, our approach results in an efficient and high-quality service, which is both cost-effective and fast responsive, enables our customers to enjoy risk-free services.</p>
          </div>
        </div>
      </div>

        <Footer />
    </>
  )
}

export default About