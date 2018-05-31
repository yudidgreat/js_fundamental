//Case Study

const hitungPajak = harga => {
  const totalHarga = harga * 0.15;
  return totalHarga;
};

const hitungOngkir = city => {
    let ongkir 
    if (city ==='Jakarta'){
        ongkir = 10000
    } else if (city ==='Tangerang'){
        ongkir = 15000
    } else if (city ==='Bandung'){
        ongkir = 20000
    } else if (city ==='Bogor'){
        ongkir =17000
    }
    return ongkir
}

const hitungDiskon = harga => {
  const totalDiscount = harga * 0.1;
  return totalDiscount;
};

const hitungTotalHargaBarang = (originalPrice, taxAja, shippingAja, discountFeeAja) => {
    const totalHargaPembayaran = originalPrice + taxAja + shippingAja - discountFeeAja
    return totalHargaPembayaran
};


const pajakSaja = hitungPajak(hargaSepatu);
const discountSaja = hitungDiskon(hargaSepatu);
const ongkirSaja = hitungOngkir (kota)
const totalHarga = hitungTotalHargaBarang (hargaSepatu,pajakSaja,ongkirSaja,discountSaja)
console.log (totalHarga)
