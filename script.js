/** 
 * BB2 Store | Futuristic Core Engine
 * Optimized for high-FPS performance and minimalist UI.
 */

const BB2_ENGINE = {
    state: {
        cart: JSON.parse(localStorage.getItem("bb2_cart")) || [],
        isDragging: false,
        initialized: false
    },

    // Initialize 3D Viewer with optimized lighting and anti-aliasing
    init3D: function() {
        if (this.state.initialized) return;
        
        const container = document.getElementById('canvas-container');
        const w = container.clientWidth, h = container.clientHeight;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
        this.camera.position.z = 6.5;

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(w, h);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(this.renderer.domElement);

        this.beanieGroup = new THREE.Group();
        this.scene.add(this.beanieGroup);

        // Advanced Material Definition
        const mat = new THREE.MeshStandardMaterial({ 
            color: 0x111112, roughness: 0.9, metalness: 0.05 
        });

        // Add model components (Dome, Cuff, Stitch)
        this.addBeanieParts(mat);
        this.addLighting();

        this.state.initialized = true;
        this.animate();
    },

    animate: function() {
        requestAnimationFrame(() => this.animate());
        if (!this.state.isDragging) {
            this.beanieGroup.rotation.y += 0.005;
        }
        this.renderer.render(this.scene, this.camera);
    },

    // Cart Management Logic
    updateCart: function(product, price) {
        this.state.cart.push({ product, price, id: Date.now() });
        localStorage.setItem("bb2_cart", JSON.stringify(this.state.cart));
        this.renderCartUI();
    },

    renderCartUI: function() {
        const container = document.getElementById('cart-items-container');
        if (!container) return;
        
        container.innerHTML = this.state.cart.map(item => `
            <div class="cart-item">
                <span>${item.product}</span>
                <span>£${item.price}</span>
            </div>
        `).join('');
    }
};

// Event Listeners for UI interaction
document.addEventListener("DOMContentLoaded", () => {
    BB2_ENGINE.renderCartUI();
});
