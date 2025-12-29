document.getElementById('showAll').addEventListener('click', function() {
    var rows = document.querySelectorAll('.table tbody tr');
    rows.forEach(function(row) {
        row.style.display = '';
    });
});

document.getElementById('showAMD').addEventListener('click', function() {
    var rows = document.querySelectorAll('.table tbody tr');
    rows.forEach(function(row) {
        if (row.classList.contains('processor-amd')) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

document.getElementById('showIntel').addEventListener('click', function() {
    var rows = document.querySelectorAll('.table tbody tr');
    rows.forEach(function(row) {
        if (row.classList.contains('processor-intel')) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});