// Will hold our list of abstract 3D objects.
        var scene = new THREE.Scene();

        // An absract helper object to generate the matrix to help position
        // vertices in such a way that we get the illusion of a 3D object given
        // some perspective.
        var camera = new THREE.PerspectiveCamera(
          75, window.innerWidth / window.innerHeight, 0.1, 1000
        );

        // This is where the David Blaine will happen.
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        //cube
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({color: 0xFF2F2F, wireframe: false});
        var material2 = new THREE.MeshPhongMaterial({
            map: THREE.ImageUtils.loadTexture("tile.jpg"),
            bumpMap: THREE.ImageUtils.loadTexture("tilebump.jpg"),
            bumpScale: .5
        });
        var cube = new THREE.Mesh(geometry, material2);
        scene.add(cube);

        var light = new THREE.PointLight( 0xFFFFFF, .5, 10);
        light.position.set(0, 2, 8);
        scene.add(light);

        var light2 = new THREE.AmbientLight( 0x777777 , .2); // soft white light
        scene.add( light2 );

        var light3 = new THREE.DirectionalLight( 0xFFFFFF, .5, 10);
        scene.add(light3);

        camera.position.z = 2;

        requestAnimationFrame(function animate() {
          cube.rotation.x = Date.now()*0.001;
          cube.rotation.y = Date.now()*0.001;

          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        });