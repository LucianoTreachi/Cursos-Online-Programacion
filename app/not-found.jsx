import Container from "@/components/container/Container";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <h2 style={{ textAlign: "center", fontWeight: "500" }}>
          Error 404 | Página no encontrada
        </h2>
      </Container>
    </section>
  );
}
