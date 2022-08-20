import { NavLink } from 'react-router-dom'
import ButtonType1 from '../components/ButtonType1'
import ContentSection from '../components/ContentSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import PageQuote from '../components/PageQuote'

type Props = {}

const Services = (props: Props) => {
  return (
    <>
        <HeroSection imgurl='images/services__banner.png'>
            <h1 className=" text-4xl md:text-5xl text-white">grow with <br /> <span className="text-nsgreen">nordiska solutions</span></h1>
        </HeroSection>

        <PageQuote>
            <span>We create value through strong, trusting relationships with our clients so they have the freedom and peace of mind to tackle other business issues. In fact, more than 80% of our business comes from returning clients who put their continued trust in ADF. &nbsp;</span>
        </PageQuote>

        <ContentSection uniqueId='business-support'>
            {{
              contentBgCSS : {
                backgroundColor : "#24272B" //0E7C7B
              },
              contentBody : (<>
                <p>In a complex world you need to discover smart ways and creative solutions. Nordiska Solutions introduce professional services such as sales channel development, sales leads generation, follow-up works, and business networking, after supports in order to expand your business globally.  </p>
              </>),
              contentTitle : "business support",
              contentImageURL : "images/icon__business__support.png",
              contentLink : <NavLink to='/' className='btn-type1'>Inquire</NavLink>
            }}
        </ContentSection>
        <ContentSection uniqueId='sales-marketing'>
            {{
              contentBgCSS : {
                backgroundColor : "#073E4A"
              },
              contentBody : (<>
                <p>Nordiska Solutions accesses new markets for you quickly and efficiently. Our aim is to significantly increase your revenue within the shortest possible time. Our sales experts analyse and strengthen existing business structures. They develop the optimum sales approach for each of your customer segments and take over individual sales processes for you or specific sections of your sales efforts in their entirety. We have been doing this with great success – for more than 28 years.</p>
              </>),
              contentTitle : "sales & marketing",
              contentImageURL : "images/icon2__sales__marketing.png",
              contentLink : <NavLink to='/' className='btn-type1'>Inquire</NavLink>
            }}
        </ContentSection>
        <ContentSection uniqueId='tech-solutions'>
            {{
              contentBgCSS : {
                backgroundColor : "#322133"
              },
              contentBody : (<>
                <p>We truly believe that we are better together. A strategic partnership or an alliance will give you a competitive advantage and an opportunity to access a broader range of resources and expertise. This means that the partnership can offer clients distinctive skill sets and product lines that are different from the competition.</p>
              </>),
              contentTitle : "technology solutions",
              contentImageURL : "images/icon__business__support.png",
              contentLink : <NavLink to='/' className='btn-type1'>Inquire</NavLink>
            }}
        </ContentSection>
        <ContentSection uniqueId='business-matchmaking'>
            {{
              contentBgCSS : {
                backgroundColor : "#1E354A"
              },
              contentBody : (<>
                <p>In a complex world you need to discover smart ways and creative solutions. Nordiska Solutions introduce professional services such as sales channel development, sales leads generation, follow-up works, and business networking, after supports in order to expand your business globally.  </p>
              </>),
              contentTitle : "business matchmaking",
              contentImageURL : "images/icon__business__match.png",
              contentLink : <NavLink to='/' className='btn-type1'>Inquire</NavLink>
            }}
        </ContentSection>
        <ContentSection uniqueId='consultancy'>
            {{
              contentBgCSS : {
                backgroundColor : "#813333" //D62246
              },
              contentBody : (<>
                <p>Our aim is to make your life easier and simpler. Nordiska Solutions excels at helping companies utilize their people, processes and tools to adopt the power of technology to change how they understand and interact with their customers. </p>
              </>),
              contentTitle : "consutancy",
              contentImageURL : "images/icon2__consultancy.png",
              contentLink : <NavLink to='/' className='btn-type1'>Inquire</NavLink>
            }}
        </ContentSection>
        
        <Footer />
    </>
  )
}

export default Services