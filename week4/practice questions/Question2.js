function generateMultiplicationTable(num) {
            let table = '<table border="1"><tr><th>Multiplier</th><th>Product</th></tr>';
            console.log("Multiplication table for " + num + ":");
            for (let i = 1; i <= 10; i++) {
                console.log(num + " x " + i + " = " + (num * i));
                table += `<tr><td>${num} x ${i}</td><td>${num * i}</td></tr>`;
            }
            table += '</table>';
            return table;
        }

        function showTable() {
            const num = parseInt(document.getElementById('numberInput').value);
            if (isNaN(num)) {
                document.getElementById('tableContainer').innerHTML = "Please enter a valid number.";
                return;
            }
            document.getElementById('tableContainer').innerHTML = generateMultiplicationTable(num);
        }