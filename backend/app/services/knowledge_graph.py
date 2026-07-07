import networkx as nx

class KnowledgeGraph:

    def __init__(self):
        self.graph = nx.Graph()

    def build(self, documents):

        self.graph.clear()

        previous = None

        for index, doc in enumerate(documents):

            node = f"DOC_{index+1}"

            self.graph.add_node(
                node,
                label=doc.metadata.get("source", node)
            )

            if previous:
                self.graph.add_edge(previous, node)

            previous = node

    def to_json(self):

        nodes = []

        edges = []

        for node in self.graph.nodes(data=True):

            nodes.append({
                "id": node[0],
                "label": node[1]["label"]
            })

        for edge in self.graph.edges():

            edges.append({
                "source": edge[0],
                "target": edge[1]
            })

        return {
            "nodes": nodes,
            "edges": edges
        }


knowledge_graph = KnowledgeGraph()