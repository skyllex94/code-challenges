using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public struct Face {
    public List<Vector3> vertices {get; private set;}
    public List<int> triangles {get; private set;}
    public List<Vector2> uvs {get; private set;}

    public Face(List<Vector3> vertices, List<int> triangles, List<Vector2> uvs) {
        this.vertices = vertices;
        this.triagles = triangles;
        this.uvs = uvs;
    }
}

[RequireComponent(typeof(MeshFilter))]
[RequireComponent(typeof(MeshRenderer))]

public class Hex_Tile : MonoBehaviour
{
   private Mesh m_mesh;
   private MeshFilter m_meshFilter;
   private MeshRenderer m_meshRenderer;

   private List<Face> m_faces;

   public Material material;

   private void Awake()
   {
    m_meshFilter = GetComponent<MeshFilter>();
    m_meshRenderer = GetComponent<MeshRenderer>();

    m_mesh = new Mesh();
    m_mesh.name = "Hex";

    m_meshFilter.mesh = m_mesh;
    m_meshRenderer.material = material;
   }

   private void OnEnable()
   {
    DrawMesh();
   }

   public void OnValidate() {
    if (Application.isPlaying)
    {
        DrawMesh();
    }
   }

   private void DrawMesh()
   {
    DrawFaces();
    CombineFaces();
   }

   private void DrawFaces() {}

   private void CombineFaces() {
    List<Vector3> vertices = new List<Vector3>();
    List<int> triagles = new List<int>();
    List<Vector2> uvs = new List<Vector2>();

    for(int i = 0; i < m_faces.Count; i++) {
        vertices.AddRange(m_faces[i].vertices);
        uvs.AddRange(m_faces[i].uvs);

        int offset = (4 * i);
        foreach (int triagle in m_faces.triagles){
            tris.Add(triagle + offset);
        }
    }

    m_mesh.vertices = vertices.ToArray();
    m_mesh.triagles = this.ToArray();
    m_mesh.uv = uvs.ToArray();
    m_mesh.RecalculateNormals();
   }
}
