/**
 * AITextInputFooter - Atomic Variant (Figma Node 22428:37819)
 */
window.renderAITextInputFooter = function () {
    const footer = document.createElement('div');
    footer.className = 'ai-text-input-footer';

    const mainText = document.createElement('p');
    mainText.className = 'footer-main-text';
    mainText.innerHTML = 'AI의 답변은 부정확할 가능성이 있습니다. AI가 생성한 답변의 주의점은 <span class="footer-link">가이드라인</span>을 확인해 주세요.';
    footer.appendChild(mainText);

    const subRow = document.createElement('div');
    subRow.className = 'footer-sub-row';

    const ref = document.createElement('p');
    ref.className = 'footer-ref';
    ref.innerHTML = '참고 : <span class="footer-link">mybest</span> (2024/03/14 업데이트)';
    subRow.appendChild(ref);

    if (window.renderIcon) {
        const iconWrap = document.createElement('div');
        iconWrap.style.display = 'flex';
        iconWrap.style.gap = '4px';
        iconWrap.style.alignItems = 'center';

        iconWrap.appendChild(window.renderIcon({ name: 'bulb', size: 16 }));

        const label = document.createElement('span');
        label.className = 'footer-ref';
        label.textContent = '상품정보 주의사항';
        iconWrap.appendChild(label);

        subRow.appendChild(iconWrap);
    }

    footer.appendChild(subRow);

    return footer;
};
