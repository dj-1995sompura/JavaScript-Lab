// Select the host element
const shadowElement = document.getElementById('shadowElement');

// Attach a shadow root to the host element
const shadowRoot = shadowElement.attachShadow({ mode: 'open' });

// Add some content to the shadow DOM
shadowRoot.innerHTML = `
    <style>
        h4 {
            color: blue;
        }
    </style>
    <h4>This is a shadow element.</h4>
`;