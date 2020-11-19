{
    const s = document.createElement("style");
    s.innerHTML = `:root {
    --avi-bg-darkblue: #00294e54;
    --avi-bg-blue: #0563b8;

    --avi-bg-lightblue: #1e88e54f;
    --avi-bg-lightgreen: #0398623f;
    --avi-bg-red: #bd00444f;
    --avi-bg-yellow: #fcd79e;

    --avi-tx-lightblue: #0563b8;
    --avi-tx-lightgreen: #008756;
    --avi-tx-red: #a81349;
    --avi-tx-yellow: #f28600;
}

.page-menu,
.btn-primary {
    background: var(--avi-bg-blue) !important;
}

.claro-standard-layout-page ul.app-nav-left li.active > a,
.claro-standard-layout-page ul.app-nav-left a:hover {
    background: var(--avi-bg-darkblue);
}

.courserow-list-item-content-default:not(.success):not(.danger),
.focusarea-list-item-content.default,
.sdl-goal-token:not(.sdl-goal-token-completed) .token,
.notification-item-unread {
    background: var(--avi-bg-lightblue) !important;
    color: var(--avi-tx-lightblue) !important;
}

.claro-standard-layout-page .sdl-time-selector .btn,
.btn-link,
.notification-item-unread .notification-item-title-fragment {
    color: var(--avi-tx-lightblue) !important;
}

.courserow-list-item-content-default.success,
.focusarea-list-item-content.success,
.material-icons.icon-green-compare,
.material-icons.icon-green-check,
.sdl-goal-token-completed .token {
    background: var(--avi-bg-lightgreen) !important;
    color: var(--avi-tx-lightgreen) !important;
}

.courserow-list-item-content-default.danger,
.focusarea-list-item-content.danger,
.material-icons.icon-red-compare {
    background: var(--avi-bg-red) !important;
    color: var(--avi-tx-red) !important;
}

.material-icons.icon-yellow-compare {
    background: var(--avi-bg-yellow) !important;
    color: var(--avi-tx-yellow) !important;
}
`;
    document.head.appendChild(s);
}