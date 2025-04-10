function showForm() {
    const examFrame = document.getElementById("examFrame");
    const startButton = document.getElementById("startButton");
    const timerElement = document.getElementById("timer");

    examFrame.style.display = "block";
    startButton.style.display = "none";
    timerElement.style.display = "block";

    startCountdown(45); //start countdown for 45 minutes
}

function startCountdown(minutes) {
    let time = minutes * 60;
    const timerElement = document.getElementById("timer");
    let warned = false;

    const countdown = setInterval(() => {
        let m = Math.floor(time / 60).toString().padStart(2, '0');
        let s = (time % 60).toString().padStart(2, '0');
        timerElement.textContent = `الوقت المتبقي: ${m}:${s}`;

        if (time === 60 && !warned) {
            alert("⚠️ تبقت دقيقة واحدة! الرجاء الضغط على زر الإرسال في الفورم قبل انتهاء الوقت.");
            warned = true;
        }

        if (time <= 0) {
            clearInterval(countdown);
            showTimeoutScreen();
        }

        time--;
    }, 1000);
}

function showTimeoutScreen() {
    document.getElementById("timeoutScreen").style.display = "flex";
    document.querySelector(".container").style.display = "none";
    document.getElementById("examFrame").style.display = "none";
}

function showCheatScreen() {
    document.getElementById("cheatScreen").style.display = "flex";
    document.querySelector(".container").style.display = "none";
    document.getElementById("examFrame").style.display = "none";
}

document.addEventListener("keyup", function (e) {
    if (e.key === "PrintScreen") {
        showCheatScreen();
        sessionStorage.setItem("cheated", "true");
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key === "PrintScreen") {
        document.body.style.opacity = 0.1;
        setTimeout(function () {
            document.body.style.opacity = 1;
        }, 2000);
    }
});

function showPasswordPopup() {
    document.getElementById("passwordPopup").style.display = "block";
}

function checkPassword() {
    const enteredPassword = document.getElementById("passwordInput").value;
    if (enteredPassword === "AbwaabTest") {
        document.getElementById("passwordPopup").style.display = "none";
        showForm();
    } else {
        alert("❌ كلمة المرور خاطئة!");
    }
}

function validateForm() {
    const fullName = document.getElementById("fullName").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const experience = document.getElementById("experience").value.trim();

    if (!fullName || !phoneNumber || !experience) {
        alert("📝 رجاءً عبي كل الحقول قبل إرسال الفورم.");
        return false; // يمنع الإرسال
    }

    // إذا كلشي تمام، نوجه المستخدم للصفحة التالية
    window.location.href = "subject.html";
    return false; // نرجع false حتى ما يعيد تحميل الصفحة
}
