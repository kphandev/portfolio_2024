import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { useColorModeValue } from '@chakra-ui/react'


const ModelViewer = ({ style }) => {
    const refContainer = useRef(null);
    const refRenderer = useRef(null);

    const cameraRef = useRef(null);
    const ambientLightRef = useRef(null);
    const sunLightRef = useRef(null);

    const lampInsideRef = useRef(null)
    const lampOutsideRef = useRef(null)
    const lampOutsideBackRef = useRef(null)
    const computerLightRef = useRef(null)

    const mode = useColorModeValue('light', 'dark');

    useEffect(() => {
        const { current: container } = refContainer;

        // Scene
        const scene = new THREE.Scene();

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.shadowMap.enabled = true;
        refRenderer.current = renderer;
        container.appendChild(renderer.domElement);

        // Camera
        const aspectRatio = container.clientWidth / container.clientHeight;
        let frustumSize = aspectRatio < 1 ? 25 : 15
        const halfFrustumSize = frustumSize / 2;
        const camera = new THREE.OrthographicCamera(
            -halfFrustumSize * aspectRatio, // left
            halfFrustumSize * aspectRatio,  // right
            halfFrustumSize,               // top
            -halfFrustumSize,              // bottom
            1,                             // near
            1000                           // far
        );
        cameraRef.current = camera
        camera.position.set(20, 5, 20); // Adjust as needed

        // controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.screenSpacePanning = false;
        controls.enableDamping = true;
        controls.dampingFactor = 0.03;
        controls.enablePan = false;

        // models
        const mtlLoader = new MTLLoader();
        mtlLoader.load('models/kphandev_mouse-0-Unified.mtl', (materials) => {
            materials.preload();

            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load('models/kphandev_mouse-0-Unified.obj', (object) => {
                object.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });
                scene.add(object);
                object.position.set(-17.5, -4, 0);
                object.name = 'customModel';
            });
        });

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        ambientLightRef.current = ambientLight;
        scene.add(ambientLight);

        const sunLight = new THREE.DirectionalLight(0xffffff, 5);
        sunLightRef.current = sunLight;
        sunLight.castShadow = true;
        sunLight.shadow.mapSize.width = 512;  // Default
        sunLight.shadow.mapSize.height = 512; // Default
        sunLight.position.set(-15, 4.5, 5);
        scene.add(sunLight);

        const lampInside = new THREE.PointLight(0xFFD580, 25, 500, 2); // color, intensity, distance
        lampInside.position.set(-2.8, -0.2, 0)
        lampInsideRef.current = lampInside
        scene.add(lampInside)

        const lampOutside = new THREE.PointLight(0xFFD580, 25, 500, 2); // color, intensity, distance
        lampOutside.position.set(-5, -0.2, 0)
        lampOutsideRef.current = lampOutside
        scene.add(lampOutside)

        const lampOutsideBack = new THREE.PointLight(0xFFD580, 25, 500, 2); // color, intensity, distance
        lampOutsideBack.position.set(0, -0.2, -5)
        lampOutsideBackRef.current = lampOutsideBack
        scene.add(lampOutsideBack)

        const computerLight = new THREE.SpotLight(0x7Fb8FF, 4); // color, intensity, distance
        computerLight.position.set(-1.75, -2.25, 5.5)
        computerLightRef.current = computerLight
        scene.add(computerLight)

        // Resize listener
        const handleResize = () => {
            const renderer = refRenderer.current;
            const container = refContainer.current;

            // get aspect ratio from container, adjust camera perspective (frustum) to match
            if (container && renderer) {
                const aspectRatio = container.clientWidth / container.clientHeight;
                const newHalfFrustumSize = frustumSize / 2;

                camera.left = -newHalfFrustumSize * aspectRatio;
                camera.right = newHalfFrustumSize * aspectRatio;
                camera.top = newHalfFrustumSize;
                camera.bottom = -newHalfFrustumSize;

                camera.updateProjectionMatrix();
                camera.lookAt(new THREE.Vector3(0, 0, 0)); // Adjust as needed

                renderer.setSize(container.clientWidth, container.clientHeight); // Resize the canvas
            }
        };

        window.addEventListener('resize', handleResize);

        // Animation Loop
        const radius = 10;
        const orbitSpeed = 0.0025;

        let isUserInteracting = false;

        controls.addEventListener('start', () => { isUserInteracting = true; });
        controls.addEventListener('end', () => { isUserInteracting = false; });

        const animate = () => {
            requestAnimationFrame(animate);

            if (!isUserInteracting) {
                // Calculate the new angle based on the current position
                let theta = Math.atan2(camera.position.x, camera.position.z) + orbitSpeed;
                let x = radius * Math.sin(theta);
                let z = radius * Math.cos(theta);

                // Update camera position
                camera.position.x = x;
                camera.position.z = z;
                camera.lookAt(new THREE.Vector3(0, 0, 0));
            }

            renderer.render(scene, camera);
            controls.update();
        };
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            container.removeChild(renderer.domElement);
            renderer.dispose();
            controls.dispose();

        };
    }, []);

    // day and night
    useEffect(() => {
        const ambientLight = ambientLightRef.current;
        const sunLight = sunLightRef.current;
        const lampInside = lampInsideRef.current;
        const lampOutside = lampOutsideRef.current;
        const lampOutsideBack = lampOutsideBackRef.current;
        const computerLight = computerLightRef.current;

        if (ambientLight && sunLight) {
            if (mode === 'light') {
                ambientLight.intensity = 4;
                sunLight.intensity = 15;
                lampInside.intensity = 0
                lampOutside.intensity = 0
                lampOutsideBack.intensity = 0
                computerLight.intensity = 0

            } else {
                ambientLight.intensity = 0.2;
                sunLight.intensity = 0.2;
                lampInside.intensity = 25
                lampOutside.intensity = 25
                lampOutsideBack.intensity = 25
                computerLight.intensity = 4
            }
        }
    }, [mode]);

    // Function to update renderer and camera on route update
    useEffect(() => {
        const updateSize = () => {
            const { width, height } = refContainer.current.getBoundingClientRect();
            const renderer = refRenderer.current;
            const camera = cameraRef.current;

            if (renderer && camera) {
                renderer.setSize(width, height);

                const aspect = width / height;
                const frustumHeight = camera.top - camera.bottom;
                camera.left = -frustumHeight * aspect / 2;
                camera.right = frustumHeight * aspect / 2;
                camera.updateProjectionMatrix();
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize);

        return () => { window.removeEventListener('resize', updateSize); };
    }, [style]);


    return <div ref={refContainer} style={style}></div>;
};

export default ModelViewer;