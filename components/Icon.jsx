import React from 'react';

/**
 * Figma 아이콘 시스템을 사용하는 공용 아이콘 컴포넌트
 * 
 * @param {string} category - 아이콘 카테고리 (common, ai, service, map)
 * @param {string} name - 아이콘 이름 (bell, cart, search, ai-edit 등)
 * @param {string} variant - 상태 (solid, outline, gradient)
 * @param {number|string} size - 아이콘 크기 (기본값: 24)
 * @param {string} className - 추가 CSS 클래스
 * @param {object} style - 추가 인라인 스타일
 */
const Icon = ({
    category = 'common',
    name,
    variant = 'solid',
    size = 24,
    className = '',
    style = {},
    ...props
}) => {
    // 파일 경로 규칙: icons/{category}/{name}-{variant}.svg
    const iconPath = `./icons/${category}/${name}-${variant}.svg`;

    return (
        <img
            src={iconPath}
            alt={`${name} icon`}
            width={size}
            height={size}
            className={`figma-icon icon-${name} ${className}`}
            style={{
                display: 'inline-block',
                verticalAlign: 'middle',
                ...style
            }}
            {...props}
        />
    );
};

export default Icon;
