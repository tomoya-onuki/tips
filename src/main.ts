import * as THREE from "three";

window.addEventListener('load', () => {
    init();
}, false);


let cvsWidth: number = 600;
let cvsHeight: number = 600;
let renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ alpha: true });
let scene: THREE.Scene = new THREE.Scene();
let camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(50, cvsWidth / cvsHeight, 1, 2000);
let cube: THREE.Mesh;

function init() {
    let elem = <HTMLElement>document.querySelector('body');
    elem.append(renderer.domElement);
    camera.position.set(50, 50, 50);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(cvsWidth, cvsHeight);
    camera.aspect = cvsWidth / cvsHeight;
    camera.updateProjectionMatrix();

    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 1, 1);
    scene.add(light);

    const axes = new THREE.AxesHelper(10);
    scene.add(axes);

    draw();
    render();
}

function render() {
    requestAnimationFrame(render);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

function draw() {
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const material = new THREE.MeshLambertMaterial({
        color: new THREE.Color('#4da9ff'),
        transparent: true,
        opacity: 0.5
    });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}