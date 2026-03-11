import React from 'react';
import './ListCard.css';
import Card from './Card';
import ListItem from '../../components/List/ListItem';
import Button from '../../components/Button/Button';
import Badge from '../../components/Badge/Badge';
import Icon from '../../components/Icon';
import Divider from '../../components/Divider/Divider';

/**
 * List Card Template
 * 
 * @param {Object} header - { badge, title, subTitle, actionIcon }
 * @param {Array} items - List of item data for ListItem component
 * @param {Array} images - List of image URLs for the gallery section
 * @param {Array} actions - List of button configs for the footer
 */
const ListCard = ({
    header = {},
    items = [],
    images = [],
    actions = [],
    className = '',
    onClick
}) => {
    return (
        <Card className={`list-card ${className}`} onClick={onClick}>
            {/* Header Section */}
            {(header.title || header.badge) && (
                <div className="list-card-header">
                    <div className="list-card-header-left">
                        {header.badge && (
                            <div className="list-card-badge-row">
                                <Badge label={header.badge} type="key" />
                            </div>
                        )}
                        <h3 className="list-card-title">{header.title}</h3>
                        {header.subTitle && <span className="card-date">{header.subTitle}</span>}
                    </div>
                    {header.actionIcon && (
                        <Icon name={header.actionIcon} size={20} color="var(--content-tertiary)" />
                    )}
                </div>
            )}

            {/* Gallery Section */}
            {images.length > 0 && (
                <div className="list-card-gallery">
                    {images.map((img, idx) => (
                        <div key={idx} className="list-card-gallery-item">
                            <img src={img} alt={`Gallery ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    ))}
                </div>
            )}

            {/* List Items Section */}
            {items.length > 0 && (
                <div className="list-card-items">
                    {items.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <ListItem {...item} />
                            {idx < items.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </div>
            )}

            {/* Footer Actions */}
            {actions.length > 0 && (
                <div className="list-card-footer">
                    {actions.map((action, idx) => (
                        <Button
                            key={idx}
                            label={action.label}
                            type={action.type || 'secondary'}
                            onClick={action.onClick}
                        />
                    ))}
                </div>
            )}
        </Card>
    );
};

export default ListCard;
