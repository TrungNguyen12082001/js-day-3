var btnTinh = document.getElementById("btnTinh");
console.log(btnTinh);

btnTinh.addEventListener("click", function(e){
    e.preventDefault();
    //chuyen kieu du lieu (parse)
    //parseFloat: float (kieu so thuc)
    //parseInt: integer (so nguyen)
    var num1 = parseFloat(document.getElementById("inputNum1").value);
    var num2 = document.getElementById("inputNum2").value;
    var num3 = document.getElementById("inputNum3").value;
    var num4 = document.getElementById("inputNum4").value;
    var num5 = document.getElementById("inputNum5").value;
    console.log(typeof(num1));

    console.log(num1,num2,num3,num4,num5);
    
    var trungBinh = (num1+parseFloat(num2)+parseFloat(num3)+parseFloat(num4)+parseFloat(num5))/5;
    var tb = document.getElementById("txtThongBao");
    tb.innerHTML = "Gia tri trung binh: "+trungBinh;
    console.log(trungBinh);
});