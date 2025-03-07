document.addEventListener('DOMContentLoaded', (event) => {
    const storedLastPeriod = localStorage.getItem('lastPeriod');
    const storedCycleLength = localStorage.getItem('cycleLength');
    const storedNotifyMe = localStorage.getItem('notifyMe');

    if (storedLastPeriod) {
        document.getElementById('lastPeriod').value = storedLastPeriod;
    }
    if (storedCycleLength) {
        document.getElementById('cycleLength').value = storedCycleLength;
    }
    if (storedNotifyMe === 'true') {
        document.getElementById('notifyMe').checked = true;
    }

    if (storedLastPeriod && storedCycleLength) {
        calculateNextPeriod(new Date(storedLastPeriod), parseInt(storedCycleLength, 10));
    }

    document.getElementById('periodForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const lastPeriodDate = new Date(document.getElementById('lastPeriod').value);
        const cycleLength = parseInt(document.getElementById('cycleLength').value, 10);
        const notifyMe = document.getElementById('notifyMe').checked;

        if (isNaN(lastPeriodDate.getTime()) || isNaN(cycleLength) || cycleLength <= 0) {
            document.getElementById('result').innerText = 'Please enter valid data.';
            return;
        }

        localStorage.setItem('lastPeriod', document.getElementById('lastPeriod').value);
        localStorage.setItem('cycleLength', cycleLength);
        localStorage.setItem('notifyMe', notifyMe);

        calculateNextPeriod(lastPeriodDate, cycleLength);

        if (notifyMe) {
            setNotification(lastPeriodDate, cycleLength);
        }
    });
});

function calculateNextPeriod(lastPeriodDate, cycleLength) {
    const nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + cycleLength);

    document.getElementById('result').innerText = `Your next period is expected on: ${nextPeriodDate.toDateString()}`;
}

function setNotification(lastPeriodDate, cycleLength) {
    if ('Notification' in window && navigator.serviceWorker) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                const nextPeriodDate = new Date(lastPeriodDate);
                nextPeriodDate.setDate(nextPeriodDate.getDate() + cycleLength);

                const timeUntilNextPeriod = nextPeriodDate.getTime() - Date.now();
                
                navigator.serviceWorker.register('sw.js').then(function(registration) {
                    registration.showNotification('Period Tracker', {
                        body: `Your next period is expected on: ${nextPeriodDate.toDateString()}`,
                        tag: 'period-tracker'
                    });
                });

                setTimeout(() => {
                    navigator.serviceWorker.getRegistration().then(function(registration) {
                        registration.showNotification('Period Tracker', {
                            body: `Your next period is expected on: ${nextPeriodDate.toDateString()}`,
                            tag: 'period-tracker'
                        });
                    });
                }, timeUntilNextPeriod);
            }
        });
    }
}



