/**
 * Render StatusBar Component
 * 
 * @param {Object} options
 * @param {string} options.mode - 'light' | 'dark'
 * @param {string} options.time - Time string
 * @param {number} options.battery - Battery level (0-100)
 * @returns {HTMLElement}
 */
function renderStatusBar({
    mode = 'light',
    time = '9:41',
    battery = 85
} = {}) {
    const container = document.createElement('div');
    container.className = `status-bar status-bar-${mode}`;

    const timeDiv = document.createElement('div');
    timeDiv.className = 'status-bar-time';
    timeDiv.textContent = time;

    const levels = document.createElement('div');
    levels.className = 'status-bar-levels';

    // Cellular icon (simplified SVG)
    const cellular = document.createElement('div');
    cellular.className = 'status-bar-icon';
    cellular.innerHTML = `
        <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="7" width="3" height="3" rx="1" fill="currentColor"/>
            <rect x="4.5" y="5" width="3" height="5" rx="1" fill="currentColor"/>
            <rect x="8.5" y="2" width="3" height="8" rx="1" fill="currentColor"/>
            <rect x="12.5" y="0" width="3" height="10" rx="1" fill="currentColor" fillOpacity="0.3"/>
        </svg>
    `;

    // Wifi icon (simplified SVG)
    const wifi = document.createElement('div');
    wifi.className = 'status-bar-icon';
    wifi.innerHTML = `
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 12C10.5 12 12 11 13 10L8.5 5.5L4 10C5 11 6.5 12 8.5 12Z" fill="currentColor"/>
        </svg>
    `;

    // Battery
    const batteryDiv = document.createElement('div');
    batteryDiv.className = 'status-bar-battery';
    const level = document.createElement('div');
    level.className = 'status-bar-battery-level';
    level.style.width = `${Math.min(100, Math.max(0, battery))}%`;
    batteryDiv.appendChild(level);

    levels.appendChild(cellular);
    levels.appendChild(wifi);
    levels.appendChild(batteryDiv);

    container.appendChild(timeDiv);
    container.appendChild(levels);

    return container;
}
