function BMICalculation() {
    var bmiWeight = $("#bodyWeight").val();
    var bmiHeight = $("#bodyHeight").val()/100;
    var bmiAge = $("#age").val();
    if (bmiAge <= 18) { //Usia minimal untuk bisa menggunakan BMI adalah 18
        mscAlert("Usia belum memenuhi kriteria. Kalkulator hanya untuk 18 tahun ke atas");
    } else {
        var bmi = bmiWeight / (bmiHeight ** 2);
        // document.getElementById("contenthasil").style.display = "block";
        document.getElementById("underweightInfo").style.display = "none";
        document.getElementById("overweightInfo").style.display = "none";
        document.getElementById("BMIvalue").innerHTML = bmi.toFixed(1).toString();
        if (bmi < 18.5) {
            document.getElementById("BMIcategory").innerHTML = "Berat Badan Kurang";
            document.getElementById("BMIdescription").innerHTML = "Anda kekurangan berat badan";
            document.getElementById("BMIadvice").innerHTML = "Anda berada dalam kategori kekurangan berat badan. <br /> Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
            document.getElementById("BMIresult").innerHTML = "Hasil BMI kurang dari 18.5";
            document.getElementById("underweightInfo").style.display = "block";
        } else if (bmi <= 24.9) {
            document.getElementById("BMIcategory").innerHTML = "Normal";
            document.getElementById("BMIdescription").innerHTML = "Anda memiliki berat badan ideal.";
            document.getElementById("BMIadvice").innerHTML = "Anda berada dalam kategori berat badan yang normal. <br /> Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda. ";
            document.getElementById("BMIresult").innerHTML = "Hasil BMI diantara 18.5 dan 24.9";
        } else if (bmi <= 29.9) {
            document.getElementById("BMIcategory").innerHTML = "Berat Badan Lebih";
            document.getElementById("BMIdescription").innerHTML = "Anda memiliki berat badan berlebih";
            document.getElementById("BMIadvice").innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih. <br /> Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.  <br /> Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
            document.getElementById("BMIresult").innerHTML = "Hasil BMI diantara 25.0 dan 29.9 ";
            document.getElementById("overweightInfo").style.display = "block";
        } else {
            document.getElementById("BMIcategory").innerHTML = "Obesitas";
            document.getElementById("BMIdescription").innerHTML = "Anda berada dalam kategori obesitas";
            document.getElementById("BMIadvice").innerHTML = "Anda berada dalam kategori obesitas. <br /> Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. <br /> Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
            document.getElementById("BMIresult").innerHTML = "Hasil BMI lebih dari 29.9";
            document.getElementById("overweightInfo").style.display = "block";
        }
        window.location.href = '#hasil';
    }
}

function clearForm() {
    $("#BMIform").trigger("reset");
    // document.getElementById("contenthasil").style.display = "none";
    document.getElementById("overweightInfo").style.display = "none";
    document.getElementById("underweightInfo").style.display = "none";
    document.getElementById("BMIcategory").innerHTML = "BMI";
    document.getElementById("BMIdescription").innerHTML = "";
    document.getElementById("BMIadvice").innerHTML = "";
    document.getElementById("BMIresult").innerHTML = "";
    document.getElementById("BMIvalue").innerHTML = "0";
    // window.location.href = '#datapengguna';
}

function loading(condition, actionname) {
    if (!condition) {
        console.log("loading");
    } else {
        console.log("loading");
    }
}
