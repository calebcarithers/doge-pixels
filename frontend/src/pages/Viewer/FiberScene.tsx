import React, {useCallback, useRef, useState} from 'react';
import * as THREE from 'three';
import {Box3, Object3D} from 'three';
import {Camera, Canvas, useLoader, useThree} from "@react-three/fiber";
import KobosuImage from "../../images/kobosu.jpeg"
import {Box, HStack} from "@chakra-ui/react";
import Button from "../../DSL/Button/Button";
import Typography, {TVariant} from "../../DSL/Typography/Typography";

const FiberScene = () => {
    const cam = new THREE.PerspectiveCamera(
        5,
        window.innerWidth / window.innerHeight,
        0.0000001,
        10000
    )
    const [camera] = useState<THREE.PerspectiveCamera>(cam)

    const canvasParentRef = useCallback((node: HTMLDivElement) => {
        if (node) {
            const width = node.clientWidth
            const height = node.clientHeight
            camera.aspect = width / height
            camera.updateProjectionMatrix()
        }
    }, [])

    const texture = useLoader(THREE.TextureLoader, KobosuImage)
    texture.magFilter = THREE.NearestFilter
    const scale = 480
    const aspectRatio = texture.image.width / texture.image.height
    const imageWorldUnitsWidth = aspectRatio * scale
    const imageWorldUnitsHeight = scale
    const imageWorldUnitsArea = imageWorldUnitsWidth * imageWorldUnitsHeight

    const worldUnitsPixelArea = imageWorldUnitsArea / (texture.image.width * texture.image.height)
    const worldUnitPixelLength = Math.sqrt(worldUnitsPixelArea)

    const [boundingBox, setBoundingBox] = useState<Box3 | null>(null)
    const [overlayLength] = useState<number>(worldUnitPixelLength)

    const overlayRef = useRef<Object3D>(null)
    const imageMeshRef = useCallback(node => {
        if (node) {
            const box = new THREE.Box3().setFromObject(node)
            setBoundingBox(box)
        }
    }, [])

    const cameraMovementSensitivity = 80
    camera.position.x = imageWorldUnitsWidth/2 - 0.65
    camera.position.y = imageWorldUnitsHeight/2 + 0.26
    camera.position.z = 300

    return <Box ref={canvasParentRef} position={"relative"} w={"100%"} h={"100%"}>
        <Canvas camera={camera}>
            <mesh
                ref={imageMeshRef}
                position={[imageWorldUnitsWidth/2, imageWorldUnitsHeight/2, 0]}
                onPointerMove={(e) => {
                    const {point} = e

                    if (overlayRef.current) {
                        const testX = Math.round(point.x / overlayLength) + (overlayLength / 2)
                        const testY = Math.round(point.y / overlayLength) + (overlayLength / 2)
                        console.log("debug::position", point.x, imageWorldUnitsWidth, testX)

                        overlayRef.current.position.x = testX
                        overlayRef.current.position.y = testY
                    }
                }}
            >
                <planeGeometry attach={"geometry"} args={[imageWorldUnitsWidth, imageWorldUnitsHeight]}/>
                <meshBasicMaterial attach={"material"} map={texture}/>
            </mesh>
            <mesh ref={overlayRef} position={[0,0,0.0001]}>
                <planeGeometry attach={"geometry"} args={[overlayLength, overlayLength]}/>
                <meshBasicMaterial attach={"material"} color={0xff0000} opacity={0.5} transparent={true}/>
            </mesh>
        </Canvas>
        <HStack spacing={2} pos={"absolute"} left={0} bottom={0} m={10}>
            <Button onClick={() => camera.position.z -= cameraMovementSensitivity}>
                <Typography variant={TVariant.Body14}>+</Typography>
            </Button>
            <Button onClick={() => camera.position.z += cameraMovementSensitivity}>
                <Typography variant={TVariant.Body14}>-</Typography>
            </Button>
            <Button onClick={() => camera.position.x -= cameraMovementSensitivity}>
                <Typography variant={TVariant.Body14}>left</Typography>
            </Button>
            <Button onClick={() => camera.position.x += cameraMovementSensitivity}>
                <Typography variant={TVariant.Body14}>right</Typography>
            </Button>
            <Button onClick={() => camera.position.y -= cameraMovementSensitivity}>
                <Typography variant={TVariant.Body14}>down</Typography>
            </Button>
            <Button onClick={() => camera.position.y += cameraMovementSensitivity}>
                <Typography variant={TVariant.Body14}>up</Typography>
            </Button>
        </HStack>
    </Box>
}


export default FiberScene
