function solve(){
    var a = document.getElementById('A').value;
    var alert_a = document.getElementById('notice');
    var b = document.getElementById('B').value;
    var c = document.getElementById('C').value;
    if (a == 0 ){
        alert_a.innerHTML = "A phải khác 0!";
        alert_a.style.color = "red";
        alert_a.style.fontSize = 17 +"px";
        alert_a.style.fontStyle = "italic";
        // console.log("A phải khác 0!");
        return;
    }
    
    var del = b*b - 4*a*c;
    var x1_rs = document.getElementById('x1');
    var x2_rs = document.getElementById('x2');
    var rs =document.getElementById('result');
    var rs_detail = document.getElementById('delta_detail');
    if (del < 0 ){
        rs.innerHTML = del + ",<0";
        rs_detail.innerHTML = "Phương trình vô nghiệm";
    } else if (del > 0 ){
        rs.innerHTML = del + ", >0";
        rs_detail.innerHTML = "Phương trình có 2 nghiệm riêng biệt";
        x1_rs.innerHTML = ( -b + Math.sqrt(del) ) / 2*a;
        x2_rs.innerHTML = ( -b - Math.sqrt(del) ) / 2*a;
    } else{
        rs.innerHTML = del;
        rs_detail.innerHTML = "Phương trình có nghiệm kép";
        x1_rs.innerHTML = (-b) / 2*a;
        x2_rs.innerHTML = (-b) / 2*a;
    } 
}