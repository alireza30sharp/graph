import { Component, OnInit } from '@angular/core';
import ForceGraph3D from '3d-force-graph';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  ngOnInit(): void {

    const elem = document.getElementById('3d-graph') as any;
    const N = 300;
    const gData = {
      nodes: [...Array(N).keys()].map(i => ({ id: i })),
      links: [...Array(N).keys()]
        .filter(id => id)
        .map(id => ({
          source: id,
          target: Math.round(Math.random() * (id - 1))
        }))
    };
    /** Draw graph */
    const Graph = ForceGraph3D()(elem)
      .graphData(gData)
      .backgroundColor("#01101F")
      .nodeAutoColorBy('label')
      .height(900)
      .width(1300)
      .zoomToFit()
      .cameraPosition({ z: 400 })
      .nodeLabel(node => `${(node as any).label}: ${(node as any).titleNode}`)
      .onNodeClick(node => {
      })
      .onNodeDragEnd((node: any) => {
        node.fx = node.x;
        node.fy = node.y;
        node.fz = node.z;
      });;


  }
}
