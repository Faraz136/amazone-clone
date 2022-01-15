import Product from '../product/Product';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4V9Gl4KPBuZMkpje_qs32Y2qdpl5UPK3AQ&usqp=CAU"
            alt=""
            className="home__image"
          />
          <div className="home__row">
            <Product
              key={'12322'}
              title="Amazone Ear-pods"
              price={299.89}
              image="https://media1.popsugar-assets.com/files/thumbor/6ZqLkmM1DNMGsMxENI4ds4Q1Lmc/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2021/04/19/914/n/1922441/19f1990d607dee79160ef0.14739303_/i/Best-Amazon-Products-People-20s.jpg"
              rating={4}
            />
            <Product
              key={'adwada'}
              title="Alexa"
              price={399.56}
              image="https://m.media-amazon.com/images/G/01/sell/images/Anker-01._CB1580163796_.jpg"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              key={'1232sfsf2'}
              title="Design Pack"
              price={89.45}
              image="https://www.qualitylogoproducts.com/images/_graphics/QuickShipBox.png?size=thumb_retina "
              rating={4}
            />
            <Product
              key={'fdsfs'}
              title="Skin care pack"
              price={97.55}
              image="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/10/1493496-Best-Hair-Growth-Products-for-Thinning-Hair-and-Hair-Loss-1296x728-Header-f0dec1_02-1.jpg?w=1155&h=1528"
              rating={4}
            />
            <Product
              key={'sdfdbdfgbfg'}
              title="i Steam"
              price={199.67}
              image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550093403-41TvEA7YWGL.jpg?crop=1xw:1.00xh;center,top&resize=480:*"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              key={'sfsrgfdsgdfb'}
              title="Amzone wide Led"
              price={699.9}
              image="https://m.media-amazon.com/images/I/61--F4Dt8YL._AC_SY355_.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
