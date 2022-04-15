// Test için gönderilecek olan URL verileri
// URL değişkeni bu dizideki veriler ile değiştirilerek test edilecek
// Burayı güncellemeyin
let testUrls = ["https://algoritim.com", "https://algoritim.com//"];

// URL Değişkeni
let url = "https://algoritim.com";

// Bu method çalıştırıldığında bizim görmek istediğimiz sonuç:
// https://algoritim.com/ şeklinde olacaktır
// testUrls verilerini bu method ile çalıştırdığınızda beklenen sonucu alabiliyorsanız projeyi kaydedip gönderebilirsiniz

function trailingSlash(url) {

    for(let i = 0 ; i < url.length ; i++){
        
        if(url[i].includes('.com/') == false){
            url[i] = url[i]+'/';
        }

        if(url[i].includes('.com//')){
            url[i] = url[i].slice(0 , -1)
        }        
    }
    return url;

}

console.log(trailingSlash(testUrls));
