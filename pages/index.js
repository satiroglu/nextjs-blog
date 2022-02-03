function HomePage() {
  return (
    <>
      <div className="site-container">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">
            Ben Ahmet Ertürk. İstanbul'da yaşayan bir yazılım geliştiricisiyim.
          </h1>
          <p>
            SAP ABAP yazılımları geliştiriyor, JavaScript öğreniyor ve
            JavaScript frameworklerini yakından takip ediyorum.
          </p>
          <p>
            Sektördeki eski teknoloji ve alışkanlıkları yenilerle değiştirmek
            için websitemde modern Türkçe içerikler üretiyorum.
          </p>
        </div>
        <div className="mt-10">
          <img src="/home-photo.jpg" alt="Home Photo" />
        </div>
      </div>
    </>
  )
}

export default HomePage
