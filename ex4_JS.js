
function solve(){
    var a = document.getElementById('A').value;
    var b = document.getElementById('B').value;
    var c = document.getElementById('C').value;
    var check_a = document.getElementById('notice_a');
    if (a==0){
        check_a.innerHTML = "A phải khác 0!"
        check_a.style.fontSize = 20 + "px";
        check_a.style.color = "red";
        check_a.style.fontStyle = "italic";
        return;
    }

    var x1_rs = document.getElementById('x1');
    var x2_rs = document.getElementById('x2');
    var del = b*b -4*a*c;
    var rs = document.getElementById('result');
    var rs_detail = document.getElementById('delta_detail');
    if (del<0){
        rs.innerHTML = del + ", <0";
        rs_detail.innerHTML = "Phương trình vô nghiệm";
        x1_rs.innerHTML='';
        x2_rs.innerHTML='';
    } else if (del >0){
        rs.innerHTML = del + ", >0";
        rs_detail.innerHTML = "Phương trình có 2 nghiệm phân biệt";
        x1_rs.innerHTML = (-b + Math.sqrt(del)) / 2*a;
        x2_rs.innerHTML = (-b -Math.sqrt(del)) / 2*a;
    }else{
        rs.innerHTML = del 
        rs_detail.innerHTML = "Phương trình có nghiệm kép";
        x1_rs.innerHTML = (-b)/2*a;
        x2_rs.innerHTML = (-b)/2*a;
    }

}