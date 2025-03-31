function calculateSum() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    if (isNaN(num1) || isNaN(num2)) {
        console.error("输入无效，请输入数字");
        return;
    }
    alert(num1 + num2);
}
