import shop from '@/assets/img/branchs/shop.png'

export const Sucursal = ({sucursal}) => {
    const handleClick = () => {
      window.open('https://www.google.com/maps/search/motorshop+sucursal/@-34.603722,-58.381592,15z', '_blank');
    };

    return(
        <article 
          className="card h-100 shadow-sm cursor-pointer"
          onClick={handleClick}
          style={{
            transform: 'scale(0.7)',
            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0px 8px 16px -2px #6a6a6a';
            e.currentTarget.style.transform = 'scale(0.7) translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '';
            e.currentTarget.style.transform = 'scale(0.7)';
          }}
        >
          <img src={shop} alt="Sucursal" className="card-img-top" draggable="false" style={{objectFit: 'cover'}} />
          <div className="card-body d-flex flex-column" style={{padding: '0.42rem', gap: '0.14rem'}}>
            <small className="text-muted text-uppercase" style={{fontSize: '0.52rem', fontWeight: 300, letterSpacing: '2.8px'}}>
              Barrio N°XYZ
            </small>
            <h3 className="h5 border-bottom pb-1 mb-2" style={{fontSize: '1.3rem', fontWeight: 600, letterSpacing: '0.56px', color: '#4c4c4c'}}>
              {sucursal}
            </h3>
            <p className="mb-1" style={{fontSize: '0.79rem', fontWeight: 300, lineHeight: '1.1rem', letterSpacing: '0.28px', color: '#4d4d4d'}}>
              <i className="fa-solid fa-location-dot me-1"></i>Av. Calle P. Ahí N° 0303
            </p>
            <p className="mb-0" style={{fontSize: '0.74rem', fontWeight: 500, lineHeight: '0.79rem', letterSpacing: '0.07px', color: '#8d8d8d'}}>
              <i className="fa-solid fa-phone me-1"></i> +03 03456 4321
            </p>
          </div>
        </article>
    )
}