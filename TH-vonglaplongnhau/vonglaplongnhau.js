let table;
table = "<table border='1' width='300'>";
for (i = 1; i <= 10; i++) {
  table = table + "<tr>";
  for (j = 1; j <= 10; j++) {
    table = table + "<td>" + i * j + "</td>";
  }
  table = table + "</tr>";
}
table = table + "</table>";
document.write(table);
