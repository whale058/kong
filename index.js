<!DOCTYPE html>
<html>
<head>
    <title>验证加法计算器</title>
</head>
<body>
    <input type="text" id="num1">
    <input type="text" id="num2">
    <button onclick="validateAndSum()">计算</button>

    <script>
        function validateAndSum() {
            const num1 = document.getElementById('num1').value;
            const num2 = document.getElementById('num2').value;
            
            if (isNaN(num1) || num1 === '' || isNaN(num2) || num2 === '') {
                console.error("错误：请输入有效数字");
                return;
            }
            
            const sum = parseFloat(num1) + parseFloat(num2);
            alert(`结果：${sum}`);
        }
    </script>
</body>
</html>
