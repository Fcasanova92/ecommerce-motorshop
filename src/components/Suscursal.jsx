import shop from '@/assets/img/branchs/shop.png'

export const Sucursal = ({sucursal}) => {
    const handleClick = () => {
      window.open('https://www.google.com/maps/search/motorshop+sucursal/@-34.603722,-58.381592,15z', '_blank');
    };

    return(
        <article 
          className="card shadow-sm"
          onClick={handleClick}
          style={{
            transform: 'scale(0.7)',
            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            cursor: 'pointer',
            borderRadius: '4px',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0px 8px 16px -2px #6a6a6a';
            e.currentTarget.style.transform = 'scale(0.7) translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0px 2px 8px -1px #4a4a4a';
            e.currentTarget.style.transform = 'scale(0.7)';
          }}
        >
          <img 
            src={shop} 
            alt="Sucursal" 
            className="card-img-top" 
            draggable="false" 
            style={{objectFit: 'cover', objectPosition: 'center'}} 
          />
          <div className="card-body" style={{padding: '0.42rem', display: 'flex', flexDirection: 'column', gap: '0.14rem'}}>
            <small 
              className="text-muted text-uppercase" 
              style={{
                fontSize: '0.52rem', 
                fontWeight: 300, 
                letterSpacing: '2.8px',
                color: '#6e6e6e'
              }}
            >
              Barrio N°XYZ
            </small>
            <h3 
              className="border-bottom mb-0 pb-1" 
              style={{
                fontSize: '1.3rem', 
                fontWeight: 600, 
                letterSpacing: '0.56px', 
                color: '#4c4c4c',
                marginBottom: '0.28rem'
              }}
            >
              {sucursal}
            </h3>
            <p 
              className="mb-0" 
              style={{
                fontSize: '0.79rem', 
                fontWeight: 300, 
                lineHeight: '1.1rem', 
                letterSpacing: '0.28px', 
                color: '#4d4d4d'
              }}
            >
              <i className="fa-solid fa-location-dot" style={{marginRight: '0.28rem', color: '#4b4b4b'}}></i>
              Av. Calle P. Ahí N° 0303
            </p>
            <p 
              className="mb-0" 
              style={{
                fontSize: '0.74rem', 
                fontWeight: 500, 
                lineHeight: '0.79rem', 
                letterSpacing: '0.07px', 
                color: '#8d8d8d'
              }}
            >
              <i className="fa-solid fa-phone" style={{marginRight: '0.28rem', color: '#4b4b4b'}}></i>
              +03 03456 4321
            </p>
          </div>
        </article>
    )
}