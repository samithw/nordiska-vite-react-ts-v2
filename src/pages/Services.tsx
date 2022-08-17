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
                backgroundImage : "linear-gradient(45deg, #1D3B42 10%, #1D3B42 90%)"
              },
              contentBody : (<>
                <p>In a complex world you need to discover smart ways and creative solutions. Nordiska Solutions introduce professional services such as sales channel development, sales leads generation, follow-up works, and business networking, after supports in order to expand your business globally.  </p>
              </>),
              contentTitle : "business support",
              contentImageURL : "images/icon__business__support.png",
              contentLink : <ButtonType1 toPath='/'>Inquire</ButtonType1>
            }}
        </ContentSection>
        <ContentSection uniqueId='sales-marketing'>
            {{
              contentBgCSS : {
                backgroundImage : "linear-gradient(45deg, #1D3B42 10%, #1D3B42 90%)"
              },
              contentBody : (<>
                <p>In a complex world you need to discover smart ways and creative solutions. Nordiska Solutions introduce professional services such as sales channel development, sales leads generation, follow-up works, and business networking, after supports in order to expand your business globally.  </p>
              </>),
              contentTitle : "Sales & Marketing",
              contentImageURL : "images/icon__business__support.png",
              contentLink : <ButtonType1 toPath='/'>Inquire</ButtonType1>
            }}
        </ContentSection>
        <ContentSection uniqueId='tech-solutions'>
            {{
              contentBgCSS : {
                backgroundImage : "linear-gradient(45deg, #1D3B42 10%, #1D3B42 90%)"
              },
              contentBody : (<>
                <p>In a complex world you need to discover smart ways and creative solutions. Nordiska Solutions introduce professional services such as sales channel development, sales leads generation, follow-up works, and business networking, after supports in order to expand your business globally.  </p>
              </>),
              contentTitle : "Technology Solutions",
              contentImageURL : "images/icon__business__support.png",
              contentLink : <ButtonType1 toPath='/'>Inquire</ButtonType1>
            }}
        </ContentSection>
        <ContentSection uniqueId='business-matchmaking'>
            {{
              contentBgCSS : {
                backgroundImage : "linear-gradient(45deg, #1D3B42 10%, #1D3B42 90%)"
              },
              contentBody : (<>
                <p>In a complex world you need to discover smart ways and creative solutions. Nordiska Solutions introduce professional services such as sales channel development, sales leads generation, follow-up works, and business networking, after supports in order to expand your business globally.  </p>
              </>),
              contentTitle : "Business Matchmaking",
              contentImageURL : "images/icon__business__support.png",
              contentLink : <ButtonType1 toPath='/'>Inquire</ButtonType1>
            }}
        </ContentSection>
        <ContentSection uniqueId='consultancy'>
            {{
              contentBgCSS : {
                backgroundImage : "linear-gradient(45deg, #1D3B42 10%, #1D3B42 90%)"
              },
              contentBody : (<>
                <p>In a complex world you need to discover smart ways and creative solutions. Nordiska Solutions introduce professional services such as sales channel development, sales leads generation, follow-up works, and business networking, after supports in order to expand your business globally.  </p>
              </>),
              contentTitle : "Consutancy",
              contentImageURL : "images/icon__business__support.png",
              contentLink : <ButtonType1 toPath='/'>Inquire</ButtonType1>
            }}
        </ContentSection>
        
        <Footer />
    </>
  )
}

export default Services