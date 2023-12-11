import React, { useState } from 'react'

const Navbar = (props) => {
  const [query, setQuery] = useState()

  const handleChange = (e)=>{
    setQuery(e.target.value)
  }

  const handleClick = (e)=>{
    e.preventDefault();
    props.term(query)
  }
  return (
    <nav className="flex justify-between items-center">
      <div className="w-12 flex items-center ml-4">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX/AAD/////u7v/6+v/0ND/aWn/mZn/zc3/9fX/h4f/5ub/+Pj/tbX/t7f/oKD/ODj/Kir/3d3/wMD/MzP/UVH/1dX/yMj/qan/lJT/TU3/gID/Fxf/PT3/eHj/Dg7/jY3/ZWX/Q0P/XV3/IiL/cXH/q6v/X1//eXnZjuaVAAAE20lEQVR4nO2d63aiQAyAOyKgXAVF0Lbrtbvv/4YLZ9didUDQQEjI9689RyffwcCQub0p7rxhB9A5YkgfMaSPGNJHDOkjhvQRQ/qIIX3EkD5iSB8xpI8Y0kcM6SOG9BFD+oghfcSQPmJIHzGkjxi+jHEhml4Tff+/6wBeMXTdWU6SrD0/DQIry3Z709yEYbh4e45F/tmNae53WWYFQep76yQpmnDd3gxdw4mi2LPm27O5OZzenzRpy/vpsDHP27nlxVHkGO18Gxo6dmx9HjfLvpzqeF9ujp9WbDtQhnZqPvur65qFmdovGjrBCtviIaug/mLWGdp77Ogbsq+7ktWG0fAvX8kqam+4xQ66JduWhk6IHXFrwop01BuuscN9inVzQw871ifxmhr62JE+jd/MMMGO8wWSJoYudpQvcd9nvTc8Ygf5EsfHhlTvMhfu7ja3hu4JO8QXOd3+Tm8NA+wIXyZ4YIgdHwD1htSzsMCrNTxghwfAoc7QwI4OBKPGcIIdHAiTGsMzdnAgnGsMP7CDA+Gj2tDBjg0Ip9LQxg4NCLvS0MIODQir0vATOzQgPisNedxobm4114Yz7MjAmFUY8ujRFBgVhjRriDrWFYYpdmBgpBWGXB4WPx8X14Y8eqUF5wrDJXZgYCwrDLHjAmSshnwehz8eiFeGlMcrbkm0hjF0M4hTOGKtIfig2iRGm37jaw3Ba6UTpTLo72yIpzWcQzdT1LwMnG7EXGtoQjfzr6qXbKC/twGm1hB84PBSt4x/QX/zQ45aQ/A3/LIy23uf/kNrCH5zv6o9Gz2XgBa9GyoV9ZqOWsMZeLb8HD9QcY/Dy79mGIZ9pqPWMAJv5s5QGb3NB4yQDPub06kznIK3ojPM07GXDvkU0VCpoIcegM4QfuCpylDNwLvAd5TDTyiGSjldp6POEL7iXWOYN9dtZa+sepeGX+Ct1BoqlXaZjl8aQ/ia/gPDTtOxrOtjGubp2NlUT53hDryVx4Z5OnY0KrvTGML/ZJoY5vnfSTqWZQx8w27ScVCGeTr+Bm9bZwjf7W9smKcj9KTIcpFQaQheamtjqJQHm45lsW0whsBpMkhDZezh2h6mYf4GB5aOQzVUygcazBmuoVIwd5zhGnK/htzzkP29lPvzsIc+Da9+6R+NIf93C3k/bM/Q3vH512n419r410v517z5j1vwH3viP37IfwyY/zg+/7kY/OfT8J8TxX9eG/+5iSOYX8p/jjD/ed785+rzX2/Bf80M/3VP/Neu8V9/yH8NKf91wCMw5L8en/+eCvz3xeC/twn//Wn4PBCr9hjiv08U/72+RrBfG5fHRfWee/z3TeS/9yWTW03N/qVMeqZ1e9Dy30eYR6+mbi9o/vt5s9iT3a815FDJuDW6+Zv/2Qj8z7cgn4kPzygZwTkzIzgriPT4RaPznij33XSzsHSGZO82jc9do1pXbHF23gjOP1T8z7BUIziHVPE/S7aA+3nA/68k6zOdy4vJ+Vzuaxifra73dYvD65Nk7flpEFhZttub5ioMw2d/1Yv8syvT3O+yzAqC1PfsJCmacNs5wRk2wrgQTa+Jvv/fdQCdG6IjhvQRQ/qIIX3EkD5iSB8xpI8Y0kcM6SOG9BFD+oghfcSQPmJIHzGkjxjSRwzpI4b0EUP6iCF9/gKCNIdvAhrz/wAAAABJRU5ErkJggg==" alt="" />
        <span className="font-semibold text-lg">Youtube</span>
      </div>
      <form className="w-full flex justify-center" onSubmit={handleClick}>
        <input type="search" name="search" onChange={handleChange} className="p-2 text-sm border-2 border-gray-300 rounded-md w-1/3"  placeholder="Search"/>
      </form>
      <div className="w-8 mr-4">
        <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" />
      </div>
    </nav>
  )
}

export default Navbar
